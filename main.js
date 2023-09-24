
function initialize() {
    setTimeout(()=>{

        let fadeArray = document.getElementsByClassName('fadeIn')

        for (let node of fadeArray) {
            node.style.opacity = 1
        }

    }, 2000)
}

function setTooltip(event) {
    let tooltip = document.getElementById('tooltip')
    let x = `${event.pageX}px`
    let y = `${event.pageY}px`
    tooltip.style.left = x
    tooltip.style.top = y
    tooltip.innerHTML = event.target.dataset.tip
    tooltip.style.opacity = '1'
    console.log([x, y], event.target.dataset.tip)
}

function unsetTooltip() {
    let tooltip = document.getElementById('tooltip')
    tooltip.style.opacity = '0'
}