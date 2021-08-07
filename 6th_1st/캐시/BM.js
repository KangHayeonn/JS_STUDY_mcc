/*
    캐시 : 캐시 크기와 도시이름(배열)을 입력 받아 주어진 연산 계산 값을 리턴
    
    작성일 : 2021.08.06
    작성자 : 강병민
        
    방안 : 1. linked list를 이용 -> 방문한 값 또는 추가되는 값은 꼬리로 이동 / 캐시 크기가 넘어갈 경우 머리를 지움 


*/
function solution(cacheSize, cities) {
    
    class Node { 
        constructor(data) { 
            this.data = data; 
            this.next = null; 
        } 
    }

    class LinkedList { 
        #size = 0; 
        #head = null; 
    
    
        getSize() { 
            return this.#size; 
        } 
    
        add(node) {
            this.#size++; 
            if (!this.#head) 
                this.#head = node; 
            else { 
                let current = this.#head; 
                while (current.next) current = current.next; 
                current.next = node; 
        } 
    } 
    
        insertBackAtData(node, data) { 
            if (!this.#head) return; 
            let current = this.#head;
            while (current) {
                if (current.data == data) { 
                    this.#size++; 
                    const curNext = current.next;
                    current.next = node; 
                    node.next = curNext; return; 
                }else current = current.next; 
        } 
    } 
    
        removeAtData(data) { 
            let current = this.#head; 
            if (current.data == data) { 
                this.#size--; 
                this.#head = current.next; 
                return; 
        }   while (current.next) {
                if (current.next.data == data) { 
                    this.#size--; 
                    current.next = current.next.next; 
                    return; 
            }   else current = current.next; 
        } 
    } 
    }
    var answer = 0;
    const newList = new LinkedList();


    for(var i = 0; i < cities.length; i++){
        newList.add(cities[i]);
        console.log(cities[i]);
        //if(i >= cacheSize){
        //    remove()
    }
    
    return answer;
}
    
    
    

    
    
//출처: https://bbaktaeho-95.tistory.com/83 [Bbaktaeho]
