import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export function Box(props) {
  const ref = useRef();
  useFrame((_, delta) => {
    ref.current.rotation.x += 1 * delta;
    ref.current.rotation.y += 0.5 * delta;
  });
  return (
    <mesh
      {...props}
      ref={ref}
      onPointerUp={(e) => console.log("pointer up" + e.object.name)}
      onPointerDown={(e) => console.log("pointer down" + e.object.name)}
      onPointerOver={(e) => console.log("ponter over" + e.object.name)}
    >
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe />
    </mesh>
  );
}
