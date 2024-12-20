import { animateT, EnvironmentPresetT, LightTypeT, typeT } from './types'

export const presets = {
  base: {
    title: 'Base',
    color: 'white',
    props: {
      positionX: 0,
      positionY: 0,
      positionZ: 0,
      rotationX: 0,
      rotationY: 0,
      rotationZ: 0,
      uAmplitude: 2,

      color1: '#ff5005',
      color2: '#dbba95',
      color3: '#d0bce1',
    },
  },
  halo: {
    title: 'Halo',
    color: 'white',
    props: {
      type: 'plane' as typeT,

      uAmplitude: 1,
      uDensity: 1.3,
      uSpeed: 0.4,
      uStrength: 4,
      uTime: 0,
      uFrequency: 5.5,
      range: 'enabled',
      rangeStart: 0,
      rangeEnd: 40,
      frameRate: 10,
      destination: 'onCanvas',
      format: 'gif',
      axesHelper: 'off',
      brightness: 1.2,
      cAzimuthAngle: 180,
      cDistance: 3.6,
      cPolarAngle: 90,
      cameraZoom: 1,
      color1: '#ff5005',
      color2: '#dbba95',
      color3: '#d0bce1',
      embedMode: 'off',
      envPreset: 'city' as EnvironmentPresetT,
      gizmoHelper: 'hide',
      grain: 'on',
      lightType: '3d' as LightTypeT,
      pixelDensity: 1,
      fov: 45,
      positionX: -1.4,
      positionY: 0,
      positionZ: 0,
      reflection: 0.1,
      rotationX: 0,
      rotationY: 10,
      rotationZ: 50,
      shader: 'defaults',

      animate: 'on' as animateT,

      wireframe: false,
    },
  },
}

export const initialActivePreset = 0

export const presetsArray = Object.values(presets)
