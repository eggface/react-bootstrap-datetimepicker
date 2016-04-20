import React from "react";
import TestUtils from "react-addons-test-utils";

jest.dontMock("moment");
jest.dontMock("../DateTimeField.js");

function shallowRender(component) {
  const shallowRenderer = TestUtils.createRenderer();
  shallowRenderer.render(component);
  return shallowRenderer.getRenderOutput();
};

describe("DateTimeField", function () {
  const moment = require("moment");
  const DateTimeField = require("../DateTimeField.js");
  const happyDate = moment("1990-06-05 07:30");
  let createParent, TestParent;

  describe("By default", function () {

    it("shows the right date for a given dateTime and inputFormat", function () {
      const component = TestUtils.renderIntoDocument(<DateTimeField dateTime={happyDate.format("x")}/>);
      const input = TestUtils.findRenderedDOMComponentWithTag(component, "input");
      expect(input.value).toBe("06/05/90 7:30 AM");
    });

  });

  describe("When changing props", function () {

    beforeEach(() => {
      TestParent = React.createFactory(React.createClass({
        getInitialState() {
          return {
            dateTime: happyDate.format("x"),
            ...this.props
          };
        },

        render() {
          return <DateTimeField {...this.state} />;
        }
      }));
      createParent = (initalState) => TestUtils.renderIntoDocument(TestParent(initalState)); // eslint-disable-line
    });

    it("changes the displayed date when dateTime changes", function () {
      const Parent = createParent();
      const input = TestUtils.findRenderedDOMComponentWithTag(Parent, "input");
      expect(input.value).toBe("06/05/90 7:30 AM");
      Parent.setState({dateTime: moment("1981-06-04 05:45").format("x")});
      expect(input.value).toBe("06/04/81 5:45 AM");
    });

    it("changes the displayed format when string type inputFormat changes, with no inputDisplayFormat", function () {
      const Parent = createParent();
      const input = TestUtils.findRenderedDOMComponentWithTag(Parent, "input");
      expect(input.value).toBe("06/05/90 7:30 AM");
      Parent.setState({inputFormat: "x"});
      expect(input.value).toBe(happyDate.format("x"));
    });

    it("changes the displayed format when array inputFormat changes, with no inputDisplayFormat", function () {
      const Parent = createParent();
      const input = TestUtils.findRenderedDOMComponentWithTag(Parent, "input");
      expect(input.value).toBe("06/05/90 7:30 AM");
      Parent.setState({dateTime: moment("1981-06-04 05:45").format("x"), inputFormat: ["MM YYYY", "M YYYY"]});
      // inputDisplayFormat is set based on inputFormat, which is an array and first one is chosen
      expect(input.value).toBe("06 1981");
    });

    it("changes the displayed format when string inputDisplayFormat changes, with no inputFormat", function () {
      const Parent = createParent();
      const input = TestUtils.findRenderedDOMComponentWithTag(Parent, "input");
      expect(input.value).toBe("06/05/90 7:30 AM");
      Parent.setState({inputDisplayFormat: "DD MMM YYYY H:mm"});
      expect(input.value).toBe("05 Jun 1990 7:30");
    });

    it("changes the displayed format when inputDisplayFormat changes, with inputFormat", function () {
      const Parent = createParent();
      const input = TestUtils.findRenderedDOMComponentWithTag(Parent, "input");
      expect(input.value).toBe("06/05/90 7:30 AM");
      Parent.setState({inputDisplayFormat: "DD MMM YYYY H:mm", inputFormat: "x"});
      expect(input.value).toBe("05 Jun 1990 7:30");
    });

    it("doesn't change the defaultText if dateTime didn't change", function () {
      const Parent = createParent({defaultText: "Pick a date"});
      const input = TestUtils.findRenderedDOMComponentWithTag(Parent, "input");
      expect(input.getAttribute('placeholder')).toBe("Pick a date");
      Parent.setState({});
      expect(input.getAttribute('placeholder')).toBe("Pick a date");
    });

    it('should call the onChange callback', function () {
      const onChangeMock = jest.genMockFunction();
      const Parent = createParent({onChange: onChangeMock});
      const input = TestUtils.findRenderedDOMComponentWithTag(Parent, "input");
      input.value = "2:13 AM";
      TestUtils.Simulate.change(input);

      expect(onChangeMock.mock.calls.length).toBe(1);
    });

    it('should call the onBlur callback', function () {
      const onBlurMock = jest.genMockFunction();
      const Parent = createParent({onBlur: onBlurMock});
      const input = TestUtils.findRenderedDOMComponentWithTag(Parent, "input");
      input.value = "2:13 AM";
      TestUtils.Simulate.change(input);
      TestUtils.Simulate.blur(input);

      expect(onBlurMock.mock.calls.length).toBe(1);
    });

    it('should use the default ref on the input field', function () {
      const component = shallowRender(<DateTimeField />);
      let children = component.props.children[2];
      expect(children.props.children[0].ref).toBe('inputDateTime');
    });

    it('should use the provided ref on the input field', function () {
      const component = shallowRender(<DateTimeField inputRef='foo'/>);
      let children = component.props.children[2];
      expect(children.props.children[0].ref).toBe('foo');
    });
  });

  describe('formatValueForEvent', () => {
    let component, setStateMock, yearDigitsMock, inputFormat;
    beforeEach(() => {
      inputFormat = ['DD/MM/YYYY', 'DD/MM/YY'];
      component = TestUtils.renderIntoDocument(<DateTimeField dateTime={happyDate.format("x")}
                                                              inputFormat={inputFormat}/>);
      setStateMock = jest.genMockFunction();
      yearDigitsMock = jest.genMockFunction();
      component.setState = setStateMock;
      component.setIsValid = jest.genMockFunction();
    });

    describe('on change', () => {
      it('calls setState twice when the year is 4 digits and is valid', () => {
        component.yearDigits = yearDigitsMock.mockImplementation(() => 4);
        const date = '12/12/2016';
        const selectedValue = moment(date, inputFormat, true).format();
        const viewDate = moment(date, inputFormat, true).startOf('month').format();

        component.formatValueForEvent('onChange', {target: {value: date}});

        expect(setStateMock.mock.calls.length).toBe(2);
        expect(setStateMock.mock.calls[0][0].selectedDate.format()).toEqual(selectedValue);
        expect(setStateMock.mock.calls[0][0].viewDate.format()).toEqual(viewDate);
        expect(setStateMock.mock.calls[1][0].inputValue).toEqual('12/12/2016');
      });

      it('calls setState once when the year is 3 digits', () => {
        component.yearDigits = yearDigitsMock.mockImplementation(() => 3);

        component.formatValueForEvent('onChange', {target: {value: '12/12/201'}});

        expect(setStateMock.mock.calls.length).toBe(1);
        expect(setStateMock.mock.calls[0][0].inputValue).toEqual('12/12/201');
      });

      it('calls setState once when year is 2 digits but the event is not a blur', () => {
        component.yearDigits = yearDigitsMock.mockImplementation(() => 2);

        component.formatValueForEvent('onChange', {target: {value: '12/12/16'}});

        expect(setStateMock.mock.calls.length).toBe(1);
        expect(setStateMock.mock.calls[0][0].inputValue).toEqual('12/12/16');
      });
    });


    describe('on blur', () => {
      it('calls setState twice when year is 2 digits and is valid', () => {
        component.yearDigits = yearDigitsMock.mockImplementation(() => 2);
        const date = '12/12/16';
        const selectedValue = moment(date, inputFormat, true).format();
        const viewDate = moment(date, inputFormat, true).startOf('month').format();

        component.formatValueForEvent('onBlur', {target: {value: date}});

        expect(setStateMock.mock.calls.length).toBe(2);
        expect(setStateMock.mock.calls[0][0].selectedDate.format()).toEqual(selectedValue);
        expect(setStateMock.mock.calls[0][0].viewDate.format()).toEqual(viewDate);
        expect(setStateMock.mock.calls[1][0].inputValue).toEqual('12/12/2016');
      });

      it('calls setState twice when year is 4 digits and is valid', () => {
        component.yearDigits = yearDigitsMock.mockImplementation(() => 4);
        const date = '12/12/2016';
        const selectedValue = moment(date, inputFormat, true).format();
        const viewDate = moment(date, inputFormat, true).startOf('month').format();
        component.formatValueForEvent('onBlur', {target: {value: date}});

        expect(setStateMock.mock.calls.length).toBe(2);
        expect(setStateMock.mock.calls[0][0].selectedDate.format()).toEqual(selectedValue);
        expect(setStateMock.mock.calls[0][0].viewDate.format()).toEqual(viewDate);
        expect(setStateMock.mock.calls[1][0].inputValue).toEqual('12/12/2016');
      });

      it('calls setState once when year is 3 digits', () => {
        component.yearDigits = yearDigitsMock.mockImplementation(() => 3);
        const event = {target: {value: '12/12/201'}};

        component.formatValueForEvent('onBlur', event);

        expect(setStateMock.mock.calls.length).toBe(1);
        expect(setStateMock.mock.calls[0][0].inputValue).toEqual('12/12/201');
      });
    });
  });
});
