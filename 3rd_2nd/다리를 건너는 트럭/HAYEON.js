// 3주차 2차시
// 다리를 지나는 트럭

function solution(bridge_length, weight, truck_weights) {
    
    var answer = 0;
    var pass_bridge = [];  // 다리를 지난 트럭
    var cross_bridge = []; // 다리를 건너는 트럭
    var on_bridge_weights = 0;

    for(let i=0; i<truck_weights.length; i++){  // 7 -> 4 -> 5 -> 6
        console.log(truck_weights[i]);
        cross_bridge.push(truck_weights[i]); // 다리를 건너는 트럭에 넣음 (큐)
        var a = truck_weights.shift(); // 대기트럭에서 하나빼고 (큐)
        //console.log(a);
        
        on_bridge_weights += a; 
        answer = answer+bridge_length;
        while(on_bridge_weights > weight) {
            //answer = answer+bridge_length;
            
            var c = cross_bridge.shift();
            pass_bridge.push(c);
            on_bridge_weights -= c;
            answer++;
        }
        console.log(truck_weights);
        i--;
    }
    return answer;
}

console.log(solution(2,10,[7,4,5,6]));


// 아직 미완성이요...
