import React, { Component } from "react";
import ReactDOM from "react-dom";
import DateTimeField from "react-bootstrap-datetimepicker";
import moment from "moment";
import ParentComponent from "./ParentComponent";

class Basic extends Component {

    render() {
    return (
          <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>React Bootstrap DateTimePicker</h1>
                                This project is a port of <a href="https://github.com/Eonasdan/bootstrap-datetimepicker">https://github.com/Eonasdan/bootstrap-datetimepicker</a> for React.js
                            </div>
                        </div>
            <div className="row">
              <div className="col-xs-12">
                Controlled Component example
                <ParentComponent />
                <pre>
                  {`class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "1990-06-05",
      format: "YYYY-MM-DD",
      inputFormat: "DD/MM/YYYY",
      mode: "date"
    };
  }

  handleChange = (newDate) => {
    console.log("newDate", newDate);
    return this.setState({date: newDate});
  }

  render() {
    const {date, format, mode, inputFormat} = this.state;
    return <DateTimeField
      dateTime={date}
      format={format}
      viewMode={mode}
      inputFormat={inputFormat}
      onChange={this.handleChange}
    />;
  }
}`}
                </pre>
              </div>
            </div>
            <div className="row">
                            <div className="col-xs-12">
                                Default Basic Example
                                <DateTimeField />
                                <pre> {'<DateTimeField />'} </pre>
                            </div>
                        </div>
            <div className="row">
              <div className="col-xs-12">
                Time picker
                <DateTimeField
                  mode="time"
                />
                <pre> {'<DateTimeField mode="time" />'} </pre>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                Date picker
                <DateTimeField
                  mode="date"
                />
                <pre> {'<DateTimeField mode="date" />'} </pre>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                Month picker
                <DateTimeField
                  mode="month"
                />
                <pre> {'<DateTimeField mode="month" />'} </pre>
              </div>
            </div>
                        <div className="row">
                            <div className="col-xs-12">
                                defaultText
                                <DateTimeField
                                    defaultText="Please select a date"
                                />
                                <pre> {'<DateTimeField defaultText="Please select a date" />'} </pre>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12">
                daysOfWeekDisabled
                <DateTimeField
                  daysOfWeekDisabled={[0, 1, 2]}
                />
                <pre> {'<DateTimeField daysOfWeekDisabled={[0,1,2]} />'} </pre>

              </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12">
                minDate and maxDate
                <DateTimeField
                  maxDate={moment().add(1, "days")}
                  minDate={moment().subtract(1, "days")}
                />
                <pre> {'<DateTimeField maxDate={moment().add(1, "days")}\n' +
                'minDate={moment().subtract(1, "days")} />'} </pre>
              </div>
                        </div>
            <div className="row">
              <div className="col-xs-12">
                Month picker with minDate and maxDate
                <DateTimeField
                  mode="month"
                  maxDate={moment().add(3, "months")}
                  minDate={moment().subtract(3, "months")}
                />
                <pre> {'<DateTimeField mode="month" maxDate={moment().add(3, "months")} minDate={moment().subtract(3, "months")/>'} </pre>
              </div>
            </div>
                        <div className="row">
                            <div className="col-xs-12">
                ViewMode set to 'years' with custom inputFormat
                <DateTimeField
                  inputFormat='DD-MM-YYYY'
                  viewMode='years'
                />
                <pre> {'<DateTimeField viewMode="years" inputFormat="DD-MM-YYYY" />'} </pre>
                            </div>
                        </div>
            <div className="row">
              <div className="col-xs-12">
                ViewMode set to 'years' with min and max dates
                <DateTimeField
                  maxDate={moment().add(1, "year")}
                  minDate={moment().subtract(1, "year")}
                  viewMode='years'
                />
                <pre> {'<DateTimeField viewMode="years" maxDate={moment().add(1, "year")} minDate={moment().subtract(1, "year")}/>'} </pre>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <p>inputDisplayFormat <b>*NEW - Jan 2016*</b></p>
                <p><i>The input field <b>displays</b> the date using the inputDisplayformat.</i></p>
                <DateTimeField
                  inputDisplayFormat="DD MMM YYYY"
                />
                <pre> {'<DateTimeField inputDisplayFormat="DD MMM YYYY" />'} </pre>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <p>inputFormat with a string value <b>*UPDATED - Jan 2016*</b></p>
                <p><i>The input field only <b>accepts</b> the specified format.</i></p>
                <DateTimeField
                  inputFormat="DD MMM YYYY"
                />
                <pre> {'<DateTimeField inputFormat="DD MMM YYYY" />'} </pre>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <p>inputFormat with an array of strings <b>*UPDATED - Jan 2016*</b></p>
                <p><i>The input field can now <b>accept</b> multiple formats.</i></p>
                <p><i>The <b>first</b> inputFormat become the <b>default display</b> format when no inputDisplayFormat is specified.</i></p>
                <p>Try typing '25 Dec 2016' or '25/12/16' below!</p>
                <DateTimeField
                  inputFormat={["DD MMM YYYY", "DD/MM/YY"]}
                />
                <pre> {"<DateTimeField inputFormat={['DD MMM YYYY', 'DD/MM/YY']} />"} </pre>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <p>inputFormat and inputDisplayFormat <b>*NEW - Jan 2016*</b></p>
                <p><i>The input field <b>accepts</b> the date format(s) specified in the inputFormat,
                  but <b>displays</b> the value using the inputDisplayFormat.</i></p>
                <p>Try typing '25 Dec 2016' or '25/12/2016' below!</p>
                <DateTimeField
                  inputFormat={['DD MMM YYYY', 'DD/MM/YYYY']}
                  inputDisplayFormat='DD/MM/YYYY'
                />
                <pre> {"<DateTimeField inputFormat={['DD MMM YYYY', 'DD/MM/YYYY']} inputDisplayFormat='DD/MM/YYYY'/>"} </pre>
              </div>
            </div>
          </div>
      );
   }
}

ReactDOM.render(React.createFactory(Basic)(), document.getElementById("example"));
