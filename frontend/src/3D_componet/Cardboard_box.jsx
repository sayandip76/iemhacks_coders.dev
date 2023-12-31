/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.11 cardboard_box.glb 
Author: Andrew.Mischenko (https://sketchfab.com/Andrew.Mischenko)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cardboard-box-f43199f19c3142c68cc672db55d9a40d
Title: Cardboard Box
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/cardboard_box.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.5}>
        <mesh geometry={nodes.defaultMaterial.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/cardboard_box.glb')
