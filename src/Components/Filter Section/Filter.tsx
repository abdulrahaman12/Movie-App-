import { CiStar } from "react-icons/ci";

const Filter: React.FC = () => {

    const totalstars: number = 5;

    return (
        <div>
            <h3>Filter Products</h3>
            <ul>
                <li>
                    <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..." />
                    Ascending
                </li>
                <li>
                    <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..." />
                    Descending
                </li>
                <li>
                    <input className="form-check-input" type="checkbox" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..." />
                    Include Out of Stock
                </li>
                <li>
                    <input className="form-check-input" type="checkbox" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..." />
                    Fast Delivery Only
                </li>
                Rating {Array.from({ length: totalstars }).map((_, index) => (<CiStar key={index} />))}
            </ul>
            <button className="btn btn-primary">Clear Filters</button>

        </div>
    )
}

export default Filter