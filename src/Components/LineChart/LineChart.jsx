import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const mathMarks = [
        { "id": 1, "name": "Alice", "math": 85, "physics": 88, "chemistry": 92 },
        { "id": 2, "name": "Bob", "math": 78, "physics": 80, "chemistry": 85 },
        { "id": 3, "name": "Charlie", "math": 92, "physics": 95, "chemistry": 90 },
        { "id": 4, "name": "David", "math": 74, "physics": 76, "chemistry": 80 },
        { "id": 5, "name": "Emma", "math": 88, "physics": 85, "chemistry": 90 },
        { "id": 6, "name": "Frank", "math": 90, "physics": 92, "chemistry": 94 },
        { "id": 7, "name": "Grace", "math": 76, "physics": 78, "chemistry": 82 },
        { "id": 8, "name": "Hannah", "math": 95, "physics": 98, "chemistry": 96 },
        { "id": 9, "name": "Ian", "math": 80, "physics": 83, "chemistry": 87 },
        { "id": 10, "name": "Jack", "math": 82, "physics": 85, "chemistry": 88 }
    ]
    return (
        <div>
            <LChart width={800} height={400} data={mathMarks}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey={'physics'} stroke='yellow'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;