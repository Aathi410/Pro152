AFRAME.registerComponent("car-component", {
    schema: {
      modelRef : { type : "string", default: "../assets/car.glb" },
      clickCounter : { type : "number", default : 0}
    },

    init: function() {
      this.el.setAttribute("gltf-model", this.data.modelRef);
      const position = { x : 10, y : 5, z : 60 }
      const rotation = { x : 0, y : -50, z : 0 }
      this.el.setAttribute("position", position)
      this.el.setAttribute("rotation", rotation)
    },

    update:function(){
      window.addEventListener("click", e => {
        this.data.clickCounter = this.data.clickCounter + 1
        if(this.data.clickCounter === 1){
          const rotation = { x : 0, y : -100, z : 0}
          this.el.setAttribute("rotation", rotation)
          const position = { x : 0, y : 5, z : 60}
          this.el.setAttribute("position", position)
        }
        else if (this.data.clickCounter === 2){
          const rotation = {x : 0, y : -150, z : 0 }
          this.el.setAttribute("rotation", rotation)
          const position = { x : -12, y : 5, z : 60}
          this.el.setAttribute("position", position)
        }
        else if (this.data.clickCounter === 3){
          const rotation = { x : 0, y : -200 , z : 0}
          this.el.setAttribute("rotation", rotation)
        }
        else if (this.data.clickCounter === 4){
          const rotation = { x : 0, y : -250, z : 0}
          this.el.setAttribute("rotation", rotation)
          const position = { x : -12, y : 5, z : 50}
          this.el.setAttribute("position", position)
        }
        else if (this.data.clickCounter === 5){
          const rotation = { x : 0, y : -300, z : 0}
          this.el.setAttribute("rotation", rotation)
          const position = { x : -2, y : 5, z : 45}
          this.el.setAttribute("position", position)
        }
        else if (this.data.clickCounter === 6){
          const rotation = { x : 0, y : -357, z : 0}
          this.el.setAttribute("rotation", rotation)
          const position = { x : 5, y : 5, z : 45}
          this.el.setAttribute("position", position)
        }
        else if (this.data.clickCounter === 7){
          const position = { x : 15, y : 5, z : 16 }
          const rotation = { x : 0, y : -50, z : 0 }
          this.el.setAttribute("position", position)
          this.el.setAttribute("rotation", rotation)

          const cameraEl = document.querySelector("#camera");

          const camPosition = { x : 0, y: 200, z: 100 }
          cameraEl.setAttribute("position", camPosition);
          
          const camRotation = { x : -60, y : 0, z : 0 }
          cameraEl.setAttribute("rotation", camRotation);
        }

        else{
          const cameraEl = document.querySelector("#camera");
          
          const camPosition = { x: 0, y: 50, z: 250 };
          cameraEl.setAttribute("position", camPosition);

          const camRotation = { x : 0, y : 0, z : 0 }
          cameraEl.setAttribute("rotation", camRotation);
          
          const position = { x : 10, y : 5, z : 60 }
          const rotation = { x : 0, y : -50, z : 0 }
          this.el.setAttribute("position", position)
          this.el.setAttribute("rotation", rotation)
          
          this.data.clickCounter = 0
        }
      });
    }
  });
  