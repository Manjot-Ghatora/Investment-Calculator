export default function UserInput({inputs , handleEv}){
return(
    
    <div id="user-input">
          <div className="input-group">
            <p>
                <label >Initial Investment</label>
                <input type="number" name="initialInvestment" value={inputs.initialInvestment} onChange={handleEv} />
            </p>
            <p>
                <label >Annual Investment</label>
                <input type="number" name="annualInvestment" value={inputs.annualInvestment} onChange={handleEv} />
            </p>
    </div>
    <div className="input-group">

            <p>
                <label >Expected Return</label>
                <input type="number" name="expectedReturn" value={inputs.expectedReturn} onChange={handleEv} />
            </p>
            <p>
                <label>Duration</label>
                <input type="number" name="duration" value={inputs.duration} onChange={handleEv} />
            </p>
        </div>
    </div>
)
}



