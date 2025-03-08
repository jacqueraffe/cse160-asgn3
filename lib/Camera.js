
/**
 * Camera class using gl.lookAt() and WASDQE controls.
 */
var Camera = function() {
    this.eye = new Vector3([0, 0, 5]); // Initial eye position
    this.target = new Vector3([0, 0, 0]); // Initial target
    this.up = new Vector3([0, 1, 0]); // Initial up direction
    this.viewMatrix = new Matrix4();
    this.moveSpeed = 0.1; // Speed of movement

    this.keys = {
        'w': false,
        'a': false,
        's': false,
        'd': false,
        'q': false,
        'e': false
    };

    document.addEventListener('keydown', (event) => {
        const key = event.key.toLowerCase();
        if (this.keys.hasOwnProperty(key)) {
            this.keys[key] = true;
        }
    });

    document.addEventListener('keyup', (event) => {
        const key = event.key.toLowerCase();
        if (this.keys.hasOwnProperty(key)) {
            this.keys[key] = false;
        }
    });
};

/**
 * Updates the view matrix based on eye, target, and up vectors.
 */
Camera.prototype.updateViewMatrix = function() {
    this.viewMatrix.setLookAt(
        this.eye.elements[0], this.eye.elements[1], this.eye.elements[2],
        this.target.elements[0], this.target.elements[1], this.target.elements[2],
        this.up.elements[0], this.up.elements[1], this.up.elements[2]
    );
};

/**
 * Moves the camera based on pressed keys (WASDQE).
 */
Camera.prototype.move = function() {
   let forward = new Vector3([
       this.target.elements[0] - this.eye.elements[0],
       this.target.elements[1] - this.eye.elements[1],
       this.target.elements[2] - this.eye.elements[2]
   ]).normalize();

   let right = new Vector3();
   Vector3.cross(forward, this.up, right);
   right.normalize();

   let moveVector = new Vector3([0, 0, 0]);

   // Movement (WASD)
   if (this.keys['w']) {
       moveVector.add(forward);
   }
   if (this.keys['s']) {
       moveVector.sub(forward);
   }
   if (this.keys['a']) {
       moveVector.sub(right);
   }
   if (this.keys['d']) {
       moveVector.add(right);
   }


   // Panning (QE - Horizontal Rotation)
   if (this.keys['q']) { // Pan Left (Q key pans left - rotate)
       let panRotationMatrix = new Matrix4();
       panRotationMatrix.setRotate(2, 0, 1, 0); // Rotate 1 degree around Y axis for pan left

       let currentForward = new Vector3([
           this.target.elements[0] - this.eye.elements[0],
           this.target.elements[1] - this.eye.elements[1],
           this.target.elements[2] - this.eye.elements[2]
       ]);

       let rotatedForward = panRotationMatrix.multiplyVector3(currentForward);
       rotatedForward.normalize();

       let currentDistance = Math.sqrt(
           currentForward.elements[0] * currentForward.elements[0] +
           currentForward.elements[1] * currentForward.elements[1] +
           currentForward.elements[2] * currentForward.elements[2]
       );

       this.target.set(this.eye); // Set target to eye temporarily
       this.target.add(rotatedForward.scale(currentDistance)); // Move target along rotated forward
   }
   if (this.keys['e']) { // Pan Right (E key pans right - rotate)
       let panRotationMatrix = new Matrix4();
       panRotationMatrix.setRotate(-2, 0, 1, 0); // Rotate -1 degree around Y axis for pan right

       let currentForward = new Vector3([
           this.target.elements[0] - this.eye.elements[0],
           this.target.elements[1] - this.eye.elements[1],
           this.target.elements[2] - this.eye.elements[2]
       ]);

       let rotatedForward = panRotationMatrix.multiplyVector3(currentForward);
       rotatedForward.normalize();

       let currentDistance = Math.sqrt(
           currentForward.elements[0] * currentForward.elements[0] +
           currentForward.elements[1] * currentForward.elements[1] +
           currentForward.elements[2] * currentForward.elements[2]
       );

       this.target.set(this.eye); // Set target to eye temporarily
       this.target.add(rotatedForward.scale(currentDistance)); // Move target along rotated forward
   }


   moveVector.normalize().scale(this.moveSpeed);

   this.eye.add(moveVector);
   this.target.add(moveVector);
};
