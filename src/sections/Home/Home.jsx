import './Home.scss';
import { FaFacebookF, FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import logo from "../../assets/images/me2.png";
import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber'
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier'
import { MeshLineGeometry, MeshLineMaterial } from 'meshline'
import { Environment, Lightformer, useGLTF, useTexture } from '@react-three/drei';
import { useControls } from 'leva'

extend({ MeshLineGeometry, MeshLineMaterial })
// useGLTF.preload('https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/5huRVDzcoDwnbgrKUo1Lzs/53b6dd7d6b4ffcdbd338fa60265949e1/tag.glb')
useGLTF.preload('../../assets/images/me2.png')
useTexture.preload('https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/SOT1hmCesOHxEYxL7vkoZ/c57b29c85912047c414311723320c16b/band.jpg')

function Home() {
  // const { debug } = useControls({ debug: false })

  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="home-left">
          {/* <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} /> */}
          {/* <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} fov={50} transparent={true} /> */}
          {/* <div className="pixel-portrait-container">
            <img
              src={logo}
              alt="laggg"
              className="pixel-portrait"
            />
            <div className="pixel-frame"></div>
          </div> */}
          <Canvas camera={{ position: [0, 0, 13], fov: 25 }}>
            <ambientLight intensity={Math.PI} />
            <Physics interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
              <Band />
            </Physics>
            {/* <Environment background>
              <color attach="background" args={['transparent']} />
              <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
              <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
              <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
              <Lightformer intensity={10} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
            </Environment> */}
          </Canvas>
        </div>

        <div className="home-right">
          <div className="home-intro">
            <p className="home-greeting pixel-font">Hello, I'm</p>
            <h1 className="home-name">LUU AI GIAO<span>💤️</span></h1>
            <p className="home-description pixel-font">
              I'm a Front-end developer. I love designing websites and turning them into code.
            </p>
          </div>

          <div className="home-social">
            <a href="https://facebook.com/lunalshadi" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="social-icon" />
            </a>
            <a href="https://linkedin.com/in/lunalshadi" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://github.com/lunalshadi" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" />
            </a>
          </div>


          <button className="home-resume-button">
            + Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};


function Band({ maxSpeed = 50, minSpeed = 10 }) {
  const band = useRef(), fixed = useRef(), j1 = useRef(), j2 = useRef(), j3 = useRef(), card = useRef() // prettier-ignore
  const vec = new THREE.Vector3(), ang = new THREE.Vector3(), rot = new THREE.Vector3(), dir = new THREE.Vector3() // prettier-ignore
  const segmentProps = { type: 'dynamic', canSleep: true, colliders: false, angularDamping: 2, linearDamping: 2 }
  const { nodes, materials } = useGLTF('https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/5huRVDzcoDwnbgrKUo1Lzs/53b6dd7d6b4ffcdbd338fa60265949e1/tag.glb')
  const texture = useTexture('https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/SOT1hmCesOHxEYxL7vkoZ/c57b29c85912047c414311723320c16b/band.jpg')
  const { width, height } = useThree((state) => state.size)
  const [curve] = useState(() => new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]))
  const [dragged, drag] = useState(false)
  const [hovered, hover] = useState(false)

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]) // prettier-ignore
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]) // prettier-ignore
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]) // prettier-ignore
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.45, 0]]) // prettier-ignore

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab'
      return () => void (document.body.style.cursor = 'auto')
    }
  }, [hovered, dragged])

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera)
      dir.copy(vec).sub(state.camera.position).normalize()
      vec.add(dir.multiplyScalar(state.camera.position.length()))
        ;[card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp())
      card.current?.setNextKinematicTranslation({ x: vec.x - dragged.x, y: vec.y - dragged.y, z: vec.z - dragged.z })
    }
    if (fixed.current) {
      // Fix most of the jitter when over pulling the card
      ;[j1, j2].forEach((ref) => {
        if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation())
        const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())))
        ref.current.lerped.lerp(ref.current.translation(), delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)))
      })
      // Calculate catmul curve
      curve.points[0].copy(j3.current.translation())
      curve.points[1].copy(j2.current.lerped)
      curve.points[2].copy(j1.current.lerped)
      curve.points[3].copy(fixed.current.translation())
      band.current.geometry.setPoints(curve.getPoints(32))
      // Tilt it back towards the screen
      ang.copy(card.current.angvel())
      rot.copy(card.current.rotation())
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z })
    }
  })

  curve.curveType = 'chordal'
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping

  const myPhoto = useTexture(logo);
  console.log('myPhoto:', myPhoto);

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[2, 0, 0]} ref={card} {...segmentProps} type={dragged ? 'kinematicPosition' : 'dynamic'}>
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.25}
            // position={[0, -1.2, -0.05]}
            position={[0, -0.25, 0]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e) => (e.target.releasePointerCapture(e.pointerId), drag(false))}
            onPointerDown={(e) => (e.target.setPointerCapture(e.pointerId), drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation()))))}>
            <mesh geometry={nodes.card.geometry}>
              {/* <mesh> */}
              <planeGeometry args={[0.85, 1.15]} />
              {/* <roundedPlaneGeometry args={[0.75, 1, 0.1]} /> */}
              <meshPhysicalMaterial
                // map={materials.base.map}
                map={myPhoto}
                map-anisotropy={16}
                clearcoat={0.8} // Giảm một chút để không quá bóng
                clearcoatRoughness={0.25} // Tăng để tạo bề mặt không đều
                roughness={0.5} // Tăng để giảm độ bóng
                metalness={0.3} // Giảm để không quá kim loại
                // map-offset={[0, 0]}
                map-repeat={[1, 1]}
                map-wrapS={THREE.ClampToEdgeWrapping}
  map-wrapT={THREE.ClampToEdgeWrapping}
                side={THREE.DoubleSide}
              />
            </mesh>
            <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3} position={[0, -0.45, 0]} />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} position={[0, -0.45, 0]} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial color="white" depthTest={true} resolution={[width, height]} useMap map={texture} repeat={[-3, 1]} lineWidth={1} />
      </mesh>
    </>
  )
}

export default Home;