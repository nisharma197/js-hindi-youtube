# Projects related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code 

## project 3

```javascript
const clock = document.getElementById("clock")
//const clock = document.querySelector("#clock")

setInterval(function(){
        let date = new Date()
    //console.log(date.toLocalTimeString());
    clock.innerHTML = date.toLocalTimesString();
    }, 1000)
```