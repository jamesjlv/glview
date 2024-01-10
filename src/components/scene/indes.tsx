import { Canvas } from "@react-three/fiber/native";
import React, { Suspense } from "react";

type RendererProps = {
  children: React.ReactNode;
};

export const Scene: React.FC<RendererProps> = ({ children }) => {
  return (
    <Canvas style={{ flex: 1 }} gl={{ useLegacyLights: true }}>
      <ambientLight />
      <Suspense>{children}</Suspense>
    </Canvas>
  );
};
