import { Canvas, useFrame, useThree } from "@react-three/fiber/native";
import React, { Suspense, useEffect, useMemo, useRef } from "react";
import { Scene } from "../../components/scene/indes";
import { useAnimations, useGLTF } from "@react-three/drei/native";
import {
  AnimationMixer,
  Group,
  SkinnedMesh,
  AnimationUtils,
  AnimationClip,
} from "three";
import * as SkeletonUtils from "three/examples/jsm/utils/SkeletonUtils.js";
import TWEEN, { Tween } from "@tweenjs/tween.js";
import { runOnJS, runOnUI } from "react-native-reanimated";
type RendererProps = {
  children: React.ReactNode;
};

const Model: React.FC = () => {
  const model = useGLTF(require("../../assets/Michelle.glb"));
  const groupRef = useRef();

  const modelSceneCopy = useMemo<Group | null>(
    // @ts-expect-error - types mismatch with actual API
    () => (model ? SkeletonUtils.clone(model?.scene) : null),
    [model]
  );

  const { ref, mixer, names, actions, clips } = useAnimations(
    model?.animations,
    modelSceneCopy
  );

  useEffect(() => {
    if (model) {
      setTimeout(() => {
        modelSceneCopy.traverse((obj) => {
          if (obj instanceof SkinnedMesh) {
            obj.computeBoundingBox();
            obj.computeBoundingSphere();

            // uncomment to see bbox of skinnedMesh
            // const bbox = new BoxHelper(obj, 0xffff00);

            // modelSceneCopy.add(bbox);
          }
        });
      }, 100);
    }
  }, [model]);

  useEffect(() => {
    if (names && clips && actions) {
      actions.SambaDance.play();
    }
  }, [names, clips, actions, ref]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      mixer.update(delta);
      TWEEN.update();
    }
  });

  if (!model) {
    return null;
  }

  return (
    <group ref={groupRef} onClick={() => console.log("hi")}>
      <primitive object={modelSceneCopy} />
    </group>
  );
};

export const Renderer: React.FC<RendererProps> = ({ children }) => {
  return (
    <Scene>
      <Model />
    </Scene>
  );
};
