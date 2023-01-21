import React from 'react'
import { useRef } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useState } from 'react'
export default function Usermarks() {

    const [username, setUsername] = useState('Destiny')
    const [usermarks, setUsermarks] = useState([
        { name: 'physics', y: 0 },
        { name: 'chemistry', y: 0 },
        { name: 'maths', Y: 0 }

    ])


    var txt1 = useRef()
    var txt2 = useRef()
    var txt3 = useRef()
    var err = useRef()


    const options = {
        title: {
            text: 'My chart'
        },
        series: [{
            type: 'pie',
            data: usermarks
        }]
    }

    function myfunc() {
        // console.log('first')
        console.log(txt1.current.value)
        console.log(txt2.current.value)
        console.log(txt3.current.value)
        var txtData1 = txt1.current.value
        var txtData2 = txt2.current.value
        var txtData3 = txt3.current.value
        var msg = ''
        // var total = parseInt(txtData1) + parseInt(txtData2) + parseInt(txtData3)
        // console.log(total);
        if (txtData1 == '' || txtData2 == '' || txtData3 == '') {
            msg = 'Please fill all the fields'
            err.current.innerHTML = msg
        }
        else if (txtData1 > 100 || txtData2 > 100 || txtData3 > 100) {
            msg = 'Please enter marks between 0 to 100'
            err.current.innerHTML = msg
        }
        else if (isNaN(txtData1) || isNaN(txtData2) || isNaN(txtData3)) {
            msg = 'Please enter only numbers'
            err.current.innerHTML = msg
        }
        else if (txtData1 < 0 || txtData1 > 100 || txtData2 < 0 || txtData2 > 100 || txtData3 < 0 || txtData3 > 100) {
            msg = 'Invalid Marks Please enter marks between 0 to 100'
            err.current.innerHTML = msg
        }
        else if (txtData1 < 35 || txtData2 < 35 || txtData3 < 35) {
            msg = 'You are fail'
            err.current.innerHTML = msg
        }
        else {
            var txtData1 = +txtData1
            var txtData2 = +txtData2
            var txtData3 = +txtData3
            var total = txtData1 + txtData2 + txtData3
            var percentage = (total / 300) * 100

            var passClass = ''
            if (percentage >= 75) {
                passClass = 'Distinction'
            }
            else if (percentage >= 60 && percentage < 75) {
                passClass = 'First Class'
            }
            else if (percentage >= 35 && percentage < 60) {
                passClass = 'Second Class'
            }
            else {
                passClass = 'You are fail'
            }
            msg = `Total Marks: ${total} <br /> Percentage: ${percentage} <br /> Class: ${passClass}`
            err.current.innerHTML = msg

            setUsermarks([
                { name: 'physics', y: txtData1 },
                { name: 'chemistry', y: txtData2 },
                { name: 'maths', y: txtData3 }
            ])
        }
        setUsername('NEh-des')
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-8">
                        <h1>calculate</h1>
                        <input type="text" ref={txt1} className='form-control' /> <br />
                        <input type="text" ref={txt2} className='form-control' /> <br />
                        <input type="text" ref={txt3} className='form-control' /> <br />
                        <button onClick={myfunc} className='btn btn-primary'>Click Me!!</button>

                        <hr />
                        <p ref={err}>

                        </p>
                    </div>
                    <div className="col-xl-4">
                        {/* {username} */}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
