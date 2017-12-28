import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import formFields from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({onCancel, formValues, submitSurvey, history}) => {
    const reviewFields = formFields.map(({name, label}) => {
        return (
          <div key={name}>
              <label>{label}</label>
              <div>
                  {formValues[name]}
              </div>
          </div>
        );
    });

    return (
        <div>
            <h2>Please confirm your entries.</h2>
            {reviewFields}
            <button className="yellow darken-3 btn-flat white-text"
                    onClick={onCancel}>
                Back
            </button>
            <button
                onClick={() => {submitSurvey(formValues, history)}}
                className="green btn-flat right white-text">
                Send Message
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
}

function mapStateToProps(state) {
    return {formValues: state.form.surveyForm.values}
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));