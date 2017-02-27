import React                from 'react'
import { Field, reduxForm } from 'redux-form'

const Form = (props) => {

    const { handleSubmit, pristine, submitting } = props

    return (
        <form onSubmit={handleSubmit} className="form-horizontal">
            <div className="form-group">
                <label className="col-md-2 control-label">Username</label>
                <div className="col-md-8">
                    <Field
                        name="username"
                        component="input"
                        type="text"
                        placeholder="ex: arojunior"
                        className="form-control" />
                </div>
            </div>
            <div className="form-group">
                <div className="col-md-offset-2 col-md-10">
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={pristine || submitting}>Send
                    </button>
                </div>
            </div>
        </form>
    )

}

export default reduxForm({
  form: 'searchForm'
})(Form)
