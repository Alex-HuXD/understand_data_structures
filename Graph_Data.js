/*  Edge List

       2----0
      / \
     1---3
 
 
 shows all the possible conected pairs
 e.g  2 is conected 0,1 and 3
      so it can be write as [2,0],[2,1],[2,3]
      we do this for all nodes.
*/
const graphEL = [[0,2],[2,3],[2,1],[1,3]];




/*  Adjacent List

       2----0
      / \
     1---3
     
 
 use the node's value as index
 use the conected nodes as value
 e.g: index 0 conects to 2
      index 1 conects to 2 and 3
      index 2 conects to 1,3 and 0
      finally index 3 conexts to 1 and 2
*/

// using array
const graphAL = [[2],[2,3],[1,3,0],[1,2]];

//using object
const graphALO = {
      'node0':[2],
//    node0 has conection with node2  
      'node1':[2,3],
      'node2':[1,3,0],
      'node3':[1,2]
}




/*  Adjacent Matrix

       2----0
      / \
     1---3
     

  *each inner array.length = total nodes in the graph
  *0 means no conection,1 means has conection
  *using node's value as inner array's index
  *using object { } can makes this type of graph more clear 
*/

//using array
const graphAM = [
  [0,0,1,0], // <-- this array is at index 0, so it represent node0;
  [0,0,1,1],
  [1,1,0,1],
  [0,1,1,0]
]

//using object;
const graphAMO = {
  'node0':[0,0,1,0],
// node0 has no conection with node0 self, node1 and        node3, has conection with node2;   
  'node1':[0,0,1,1],
  'node2':[1,1,0,1],
  'node3':[0,1,1,0]
};