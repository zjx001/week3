define(['mui'], function(mui) {
    function init() {
        aj()
        addbtn1()
    }

    function addbtn1() {
        const btn1 = document.querySelectorAll('#nav div')[0]
        const btn2 = document.querySelectorAll('#nav div')[1]
        btn1.onclick = function() {
            btn2.classList.remove('active')
            this.classList.add('active')
            aj()
        }

        btn2.onclick = function() {
            btn1.classList.remove('active')
            this.classList.add('active')
            aj2()
        }
    }

    function aj() {
        const xhr = new XMLHttpRequest()
        xhr.open('get', '/getfind1', true)
        xhr.send()
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {

                    render(JSON.parse(xhr.responseText).data)
                }
            }
        }
    }

    function render(data) {
        const cont = document.querySelector('.cont')
        cont.innerHTML = data.map(file => {
            return `
                <img src="${file.img}" alt="">
                <span>${file.name}</span>
                <p>${file.title}</p>
                <div>由<img src="${file.hot}" alt="">等<span>${file.number}</span>人帮助他上热门</div>
            `
        })
    }

    function aj2() {
        const xhr = new XMLHttpRequest()
        xhr.open('get', '/getfind1', true)
        xhr.send()
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    render2(JSON.parse(xhr.responseText).data)
                }
            }
        }
    }

    function render2(data) {
        const cont = document.querySelector('.cont')
        cont.innerHTML = data.map(file => {
            return `
                <img src="${file.img}" alt="">
                <span>${file.name}</span>
        
            `

        })
    }


    init()
});