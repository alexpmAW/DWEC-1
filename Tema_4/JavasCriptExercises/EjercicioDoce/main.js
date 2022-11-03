"use strict";

function solveNanoGrama() {
    const restriccionesColumnas = document.getElementById("myInputColumnas").value;
    const restriccionesFilas = document.getElementById("myInputFilas").value;
    let arr = new Array(5);
    arr.fill(0);
    let randomMatrix;
    for (;;) {
        randomMatrix = getRandonMatrix();
        if (checkColumns(randomMatrix,restriccionesColumnas) && checkRows(randomMatrix,restriccionesFilas))
        {
            alert(randomMatrix);
            break;
        }
    }
}

function checkColumns(matrix,restricciones)
{

}

function checkRows(matrix,restricciones)
{
    
}

function getRandonMatrix() {
    const matrix = [];
    for(let i=0; i<5; i++) {
        matrix[i] = new Array(5);
    }

    for(var i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix.length; j++) {
            matrix[i][j]=Math.random()>0.5? 1 : 0;
        }
    }
  }
  
