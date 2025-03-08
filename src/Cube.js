class Cube {
   constructor(segments) {
       this.type = 'cube';
       this.color = [1.0, 1.0, 1.0, 1.0];
       this.matrix = new Matrix4();
       this.textureNum = 0;
   }

   render() {
       var rgba = this.color;
       gl.uniform1i(u_whichTexture, this.textureNum);
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
   
   renderFast() {
    var rgba = this.color;
    gl.uniform1i(u_whichTexture, this.textureNum);
    gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);
    var allVertsXYZ = [];
    var allVertsUV = [];
    
    // xy0 face
    gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);
    allVertsXYZ = allVertsXYZ.concat([0.0, 0.0, 0.0,   1.0, 1.0, 0.0,   0.0, 1.0, 0.0]);
    allVertsUV = allVertsUV.concat([0,0,1,1,0,1]);
    allVertsXYZ = allVertsXYZ.concat([0.0, 0.0, 0.0,   1.0, 0.0, 0.0,   1.0, 1.0, 0.0]);
    allVertsUV = allVertsUV.concat([0,0,1,0,1,1]);
    // xy1
    gl.uniform4f(u_FragColor, rgba[0]*0.9, rgba[1]*0.9, rgba[2]*0.9, rgba[3]);
    allVertsXYZ = allVertsXYZ.concat([1.0, 1.0, 1.0,   0.0, 0.0, 1.0,   0.0, 1.0, 1.0]);
    allVertsUV = allVertsUV.concat([1,1,0,0,0,1]);
    allVertsXYZ = allVertsXYZ.concat([1.0, 0.0, 1.0,   0.0, 0.0, 1.0,   1.0, 1.0, 1.0]);
    allVertsUV = allVertsUV.concat([1,0,0,0,1,1]);
    // 0yz
    gl.uniform4f(u_FragColor, rgba[0]*0.8, rgba[1]*0.8, rgba[2]*0.8, rgba[3]);
    allVertsXYZ = allVertsXYZ.concat([0.0, 1.0, 1.0,   0.0, 0.0, 0.0,   0.0, 1.0, 0.0]);
    allVertsUV = allVertsUV.concat([1,1,0,0,1,0]);
    allVertsXYZ = allVertsXYZ.concat([0.0, 0.0, 1.0,   0.0, 0.0, 0.0,   0.0, 1.0, 1.0]);
    allVertsUV = allVertsUV.concat([0,1,0,0,1,1]);
    // 1yz
    gl.uniform4f(u_FragColor, rgba[0]*0.7, rgba[1]*0.7, rgba[2]*0.7, rgba[3]);
    allVertsXYZ = allVertsXYZ.concat([1.0, 0.0, 0.0,   1.0, 1.0, 1.0,   1.0, 1.0, 0.0]);
    allVertsUV = allVertsUV.concat( [0,0,1,1,1,0]);
    allVertsXYZ = allVertsXYZ.concat([1.0, 0.0, 0.0,   1.0, 0.0, 1.0,   1.0, 1.0, 1.0]);
    allVertsUV = allVertsUV.concat( [0,0,0,1,1,1]);
    // x0z
    gl.uniform4f(u_FragColor, rgba[0]*0.6, rgba[1]*0.6, rgba[2]*0.6, rgba[3]);
    allVertsXYZ = allVertsXYZ.concat([1.0, 0.0, 0.0,   0.0, 0.0, 0.0,   1.0, 0.0, 1.0]);
    allVertsUV = allVertsUV.concat([1,0,0,0,1,1]);
    allVertsXYZ = allVertsXYZ.concat([0.0, 0.0, 0.0,   0.0, 0.0, 1.0,   1.0, 0.0, 1.0]);
    allVertsUV = allVertsUV.concat( [0,0,0,1,1,1]);
    // x1z face
    gl.uniform4f(u_FragColor, rgba[0]*0.7, rgba[1]*0.7, rgba[2]*0.7, rgba[3]);
    allVertsXYZ = allVertsXYZ.concat([0.0, 1.0, 1.0,   0.0, 1.0, 0.0,   1.0, 1.0, 1.0]);
    allVertsUV = allVertsUV.concat([0,1,0,0,1,1]);
    allVertsXYZ = allVertsXYZ.concat([1.0, 1.0, 1.0,   0.0, 1.0, 0.0,   1.0, 1.0, 0.0]);
    allVertsUV = allVertsUV.concat( [1,1,0,0,1,0]);
    drawTriangle3DUV(allVertsXYZ, allVertsUV);
   }
}
