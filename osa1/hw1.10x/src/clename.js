Statistics = () => {
    const showStats=(
    <React.Fragment>
        <div id="st2"><h2>statistiikka</h2>
         <Statistic name="hyvä" stat={this.state.good}/>
         <Statistic name="neutraali" stat={this.state.neutral}/>
         <Statistic name="huono" stat={this.state.bad}/>
         <Statistic name="keskiarvo" stat={this.feedbackMean()}/> 
         <Statistic name="positiivisia" stat={this.positivePerc()}/> 
         <Statistic name="lukumäärä" stat={this.state.counter}/> 
        </div>
    </React.Fragment>
    );

    const cnt=this.state.counter;

    console.log("render Statistics here");
    console.log("cnt is " + cnt);
    //HW1.9 magic for conditional return
    switch(cnt) {
        case 0:
            return (<div id="nostats">ei yhtään palautetta annettu</div>);
        default:
            return (showStats);
    };

};
