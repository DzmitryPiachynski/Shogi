import React, {useState} from "react";
import "./rankingtable.css"
function RatingTable() {

    // Используем состояние для отслеживания выбранного промежутка времени
    const [selectedRange, setSelectedRange] = useState('day');

    const handleRangeSelect = (range) => {
        setSelectedRange(range);
    };

    // Генерируем случайный контент для таблицы рейтинга
    const randomData = [
        { username: 'User1', points: 100, matches: 20 },
        { username: 'User2', points: 85, matches: 15 },
        { username: 'User3', points: 120, matches: 25 },
        { username: 'User4', points: 60, matches: 10 },
        { username: 'User5', points: 110, matches: 22 },
        { username: 'User6', points: 75, matches: 14 },
        { username: 'User7', points: 95, matches: 18 },
        { username: 'User8', points: 130, matches: 27 },
        { username: 'User9', points: 70, matches: 13 },
    ];

    return (
        <div>
            <div className="rankingCenter">
                <h2>Ranking</h2>
            </div>
            <div className="holder">

                {/*sorting*/}

                <div className="time-range-selector">
                    <div className="range">
                        <div
                            className={`circle ${selectedRange === 'day' ? 'selected' : ''}`}
                            onClick={() => handleRangeSelect('day')}
                        ></div>
                        <p>Day</p>
                    </div>
                    <div className="range">
                        <div
                            className={`circle ${selectedRange === 'month' ? 'selected' : ''}`}
                            onClick={() => handleRangeSelect('month')}
                        ></div>
                        <p>Month</p>
                    </div>
                    <div className="range">
                        <div
                            className={`circle ${selectedRange === 'year' ? 'selected' : ''}`}
                            onClick={() => handleRangeSelect('year')}
                        ></div>
                        <p>Year</p>
                    </div>
                </div>

                {/*table*/}

                <table>
                    <thead>
                    <tr>
                        <th>Username</th>
                        <th>Points</th>
                        <th>Matches</th>
                    </tr>
                    </thead>
                    <tbody>
                    {randomData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.username}</td>
                            <td>{data.points}</td>
                            <td>{data.matches}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default RatingTable;