import React, {useEffect} from 'react';
import './App.css';
import RoomList from "./components/RoomList";
import {RoomType} from "./types/room";

const rooms: RoomType[] = [
  { room_type: "Queen", vacant_rooms: 5, price: 100 },
  { room_type: "Double", vacant_rooms: 3, price: 75 },
  { room_type: "Twin", vacant_rooms: 8, price: 60 }
];

type ConditionType = {
    divisibleNumb: number
    printValue: string
}

const App = () => {
    //TODO: TASK 2

    const task2Func = (value: number) => {
        const conditions: ConditionType[] = [
            {
                divisibleNumb: 2,
                printValue: 'foo'
            },
            {
                divisibleNumb: 7,
                printValue: 'bar'
            },
            {
                divisibleNumb: 14,
                printValue: 'foobar'
            },
        ];
        console.log('------OPTION-1------')
        conditions.forEach((cond) => {
            switch (value % cond.divisibleNumb) {
                case (0):
                    console.log(cond.printValue)
                    return
                break;
                default:
                    console.log(cond.divisibleNumb)
                    return;
            }
        })
        console.log('------OPTION-2------')
        conditions.forEach((cond) => {
            if (value % cond.divisibleNumb === 0) {
                    console.log(cond.printValue)
            } else {
                console.log(cond.divisibleNumb)
            }
        })
    }

    //TODO: TASK 4
    const task4RefactoredCode = () => {
        /*
        switch (province) {
            case "ONTARIO":
              rate = ONTARIO_RATE;
              amt = base * ONTARIO_RATE;
              break;
            case "QUEBEC":
            case "ALBERTA":
              rate = (province == 'QUEBEC') ? QUEBEC_RATE : ALBERTA_RATE;
              amt = base * rate;
              if (province == 'QUEBEC') {
                points = 2
              }
              break;
            default:
              rate = 1;
              amt = base;
              break;
          }
          calc = 2 * basis(amt) + extra(amt) * 1.05;
        */
    }

    useEffect(() => {
        task2Func(16);
    }, [])

    //TODO: TASK 1
    return (
        <div className="App">
          <p>Task 1</p>
          <RoomList rooms={rooms}/>
        </div>
    );
}

export default App;
