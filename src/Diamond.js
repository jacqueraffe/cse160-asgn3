// NOTE TO GRADER: created with the help of AI prompt:
// can you make me an octahedron diamond class that is similar to the cube class?
class Diamond {
   constructor() {
       this.type = 'diamond';
       this.color = [1.0, 1.0, 1.0, 1.0];
       this.matrix = new Matrix4();
       this.textureNum = -2; // Default no texture, just color, -2 indicates color only in shader

       // Define vertices for the octahedron (diamond shape)
       // Vertices at the tips of the axes
       this.diamondVertsXYZ = new Float32Array([
           // Top pyramid
           0.0, 1.0, 0.0,  // Top vertex
           1.0, 0.0, 0.0,  // Right vertex
           0.0, 0.0, 1.0,  // Front vertex

           0.0, 1.0, 0.0,  // Top vertex
           0.0, 0.0, 1.0,  // Front vertex
           -1.0, 0.0, 0.0, // Left vertex

           0.0, 1.0, 0.0,  // Top vertex
           -1.0, 0.0, 0.0, // Left vertex
           0.0, 0.0, -1.0, // Back vertex

           0.0, 1.0, 0.0,  // Top vertex
           0.0, 0.0, -1.0, // Back vertex
           1.0, 0.0, 0.0,  // Right vertex

           // Bottom pyramid
           0.0, -1.0, 0.0, // Bottom vertex
           1.0, 0.0, 0.0,  // Right vertex
           0.0, 0.0, 1.0,  // Front vertex

           0.0, -1.0, 0.0, // Bottom vertex
           0.0, 0.0, 1.0,  // Front vertex
           -1.0, 0.0, 0.0, // Left vertex

           0.0, -1.0, 0.0, // Bottom vertex
           -1.0, 0.0, 0.0, // Left vertex
           0.0, 0.0, -1.0, // Back vertex

           0.0, -1.0, 0.0, // Bottom vertex
           0.0, 0.0, -1.0, // Back vertex
           1.0, 0.0, 0.0   // Right vertex
       ]);

       // Basic UV coordinates (can be improved for better texturing)
       this.diamondVertsUV = new Float32Array([
           // Top pyramid
           0.5, 1.0,   1.0, 0.0,   0.0, 0.0,
           0.5, 1.0,   0.0, 0.0,   0.0, 1.0,
           0.5, 1.0,   0.0, 1.0,   1.0, 1.0,
           0.5, 1.0,   1.0, 1.0,   1.0, 0.0,
           // Bottom pyramid
           0.5, 0.0,   1.0, 1.0,   0.0, 1.0,
           0.5, 0.0,   0.0, 1.0,   0.0, 0.0,
           0.5, 0.0,   0.0, 0.0,   1.0, 0.0,
           0.5, 0.0,   1.0, 0.0,   1.0, 1.0
       ]);
   }

   render() {
       var rgba = this.color;
       gl.uniform1i(u_whichTexture, this.textureNum);
       gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);
       gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);
       drawTriangle3DUV(this.diamondVertsXYZ, this.diamondVertsUV);
   }

   renderFast() {
       var rgba = this.color;
       gl.uniform1i(u_whichTexture, this.textureNum);
       gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);
       gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);
       drawTriangle3DUV(this.diamondVertsXYZ, this.diamondVertsUV);
   }
}s
