function bar_progess(arr) {
    $('.html5 .bar').css('width', arr.html5.data);
    $('.css3 .bar').css('width', arr.css3.data);
    $('.js .bar').css('width', arr.javascript.data);
    $('.jquery .bar').css('width', arr.jquery.data);
    $('.bootstrap4 .bar').css('width', arr.bootstrap4.data);

    $('.pchtml').text(arr.html5.data);
    $('.pccss').text(arr.css3.data);
    $('.pcjs').text(arr.javascript.data);
    $('.pcjquery').text(arr.jquery.data);
    $('.pcbst').text(arr.bootstrap4.data);
}

function chart_index(arr) {
    let chart = document.getElementById('chart-skill').getContext('2d');
    let barChart = new Chart(chart, {
        type: 'bar',
        height: 200,
        data: {
            labels: ['Talk', 'TeamWork', 'Github', 'English'],
            datasets: [{
                label: 'Level',
                data: [arr.talk.data, arr.teamwork.data, arr.github.data, arr.english.data],
                backgroundColor: '#55f4b1',
            }]
        },
        options: {
            legend: {
                labels: {
                    fontColor: '#888'
                }
            },
            scales: {
                xAxes: [{
                    barThickness: 30,
                    ticks: {
                        fontLabel: '#888',
                        fontColor: '#888'
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontColor: '#888',
                        min: 0,
                        max: 100
                    }
                }]
            }
        }
    });
}

var url = "https://hoangntu1995.github.io/CV/chart-data-Index.json";
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var data = xhr.responseText;
        var result = JSON.parse(data);
        bar_progess(result);
        chart_index(result);
    }
    else {
        console.log('error connect');
    }
}

xhr.open('GET', url, true);
xhr.send();
