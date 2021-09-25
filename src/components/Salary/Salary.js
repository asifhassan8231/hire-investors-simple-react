import './Salary.css';
let nameArray = [];
let total = 0;
let peopleCount = 0;
const Salary = (props) => {
    const infos = props.info;

    for (const info of infos) {

        if (!nameArray.includes(info.name)) {
            total = total + info.salary;
            peopleCount = peopleCount + 1;
            nameArray = [...nameArray, info.name];
        }
    }
    return (
        <div className="salary">
            <h2>People Added: {peopleCount}</h2>
            <h3>Total: ${total}</h3>
            {
                nameArray.map(name => <li key={name}>{name}</li>)
            }
        </div>
    );
};

export default Salary;