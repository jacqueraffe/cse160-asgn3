class Cube {
   constructor(segments) {
       this.type = 'cube';
       this.color = [1.0, 1.0, 1.0, 1.0];
       this.matrix = new Matrix4();
   }

   render() {
       var rgba = this.color;
       gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);
       // xy0 face
       gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);
       //gl.uniform4f(u_FragColor, 1, 0.5, 1, 1);
       drawTriangle3DUV([0.0, 0.0, 0.0,   1.0, 1.0, 0.0,   0.0, 1.0, 0.0], [0,0,1,1,0,1]);
       drawTriangle3DUV([0.0, 0.0, 0.0,   1.0, 0.0, 0.0,   1.0, 1.0, 0.0], [0,0,1,0,1,1]);
       // xy1
       gl.uniform4f(u_FragColor, rgba[0]*0.9, rgba[1]*0.9, rgba[2]*0.9, rgba[3]);
       //gl.uniform4f(u_FragColor, 1, 1, 0, 1);
       drawTriangle3DUV([1.0, 1.0, 1.0,   0.0, 0.0, 1.0,   0.0, 1.0, 1.0], [1,1,0,0,0,1]);
       drawTriangle3DUV([1.0, 0.0, 1.0,   0.0, 0.0, 1.0,   1.0, 1.0, 1.0], [1,0,0,0,1,1]);
       // 0yz
       gl.uniform4f(u_FragColor, rgba[0]*0.8, rgba[1]*0.8, rgba[2]*0.8, rgba[3]);
       //gl.uniform4f(u_FragColor, 1, 1, 1, 1);
       drawTriangle3DUV([0.0, 1.0, 1.0,   0.0, 0.0, 0.0,   0.0, 1.0, 0.0], [1,1,0,0,1,0]);
       drawTriangle3DUV([0.0, 0.0, 1.0,   0.0, 0.0, 0.0,   0.0, 1.0, 1.0], [0,1,0,0,1,1]);
       // 1yz
       gl.uniform4f(u_FragColor, rgba[0]*0.7, rgba[1]*0.7, rgba[2]*0.7, rgba[3]);
       //gl.uniform4f(u_FragColor, 1, 0, 0, 1);
       drawTriangle3DUV([1.0, 0.0, 0.0,   1.0, 1.0, 1.0,   1.0, 1.0, 0.0], [0,0,1,1,1,0]);
       drawTriangle3DUV([1.0, 0.0, 0.0,   1.0, 0.0, 1.0,   1.0, 1.0, 1.0], [0,0,0,1,1,1]);
       // x0z
       gl.uniform4f(u_FragColor, rgba[0]*0.6, rgba[1]*0.6, rgba[2]*0.6, rgba[3]);
       //gl.uniform4f(u_FragColor, 1, 0, 1, 1);
       drawTriangle3DUV([1.0, 0.0, 0.0,   0.0, 0.0, 0.0,   1.0, 0.0, 1.0], [1,0,0,0,1,1]);
       drawTriangle3DUV([0.0, 0.0, 0.0,   0.0, 0.0, 1.0,   1.0, 0.0, 1.0], [0,0,0,1,1,1]);
       // x1z face
       gl.uniform4f(u_FragColor, rgba[0]*0.7, rgba[1]*0.7, rgba[2]*0.7, rgba[3]);
       //gl.uniform4f(u_FragColor, 0, 0, 1, 1);
       drawTriangle3DUV([0.0, 1.0, 1.0,   0.0, 1.0, 0.0,   1.0, 1.0, 1.0], [0,1,0,0,1,1]);
       drawTriangle3DUV([1.0, 1.0, 1.0,   0.0, 1.0, 0.0,   1.0, 1.0, 0.0], [1,1,0,0,1,0]);

   }
}
