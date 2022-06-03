AFRAME.registerComponent("car-com", {
    schema: {
      car3D: { type: "string", default: "../assets/car.glb" }
    },
    init: function() {
      this.el.setAttribute("gltf-model", this.data.car3D);
    }
  });
  