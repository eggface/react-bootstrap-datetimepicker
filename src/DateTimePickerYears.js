import React, { Component, PropTypes } from "react";
import classnames from "classnames";

export default class DateTimePickerYears extends Component {
  static propTypes = {
    subtractDecade: PropTypes.func.isRequired,
    addDecade: PropTypes.func.isRequired,
    viewDate: PropTypes.object.isRequired,
    selectedDate: PropTypes.object.isRequired,
    setViewYear: PropTypes.func.isRequired,
    minDate: PropTypes.object,
    maxDate: PropTypes.object
  }

  renderYears = () => {
    var classes, i, year, years, minDate, maxDate;
    minDate = this.props.minDate ? this.props.minDate.clone() : this.props.minDate;
    maxDate = this.props.maxDate ? this.props.maxDate.clone() : this.props.maxDate;
    years = [];
    year = parseInt(this.props.viewDate.year() / 10, 10) * 10;
    year--;
    i = -1;
    while (i < 11) {
      classes = {
        year: true,
        old: i === -1 | i === 10,
        active: this.props.selectedDate.year() === year
      };
      if ((minDate && year < minDate.year()) || (maxDate && year > maxDate.year())) {
        classes.disabled = true;
      }
      years.push(<span className={classnames(classes)} key={year} onClick={this.props.setViewYear}>{year}</span>);
      year++;
      i++;
    }
    return years;
  }

  render() {
    var year;
    year = parseInt(this.props.viewDate.year() / 10, 10) * 10;
    return (
      <div className="datepicker-years" style={{display: "block"}}>
        <table className="table-condensed">
          <thead>
            <tr>
              <th className="prev" onClick={this.props.subtractDecade}><span className="glyphicon glyphicon-chevron-left" /></th>

              <th className="switch" colSpan="5">{year} - {year + 9}</th>

              <th className="next" onClick={this.props.addDecade}><span className="glyphicon glyphicon-chevron-right" /></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td colSpan="7">{this.renderYears()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
