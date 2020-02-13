import React from 'react'
import PropTypes from 'prop-types'
import classNameBinder from 'classnames'

const GenericCard = ({ body, className, title, footer }) => {
	console.log(`
    classname:${className} 
    title:${title}
    footer:${footer}
    `)
	const cardClasses = classNameBinder(`card`, { [`${className}`]: className })
	return (
		<div className={cardClasses}>
			{title && (
				<div className="card-header">
					<div className="card-title text-dark">
						<h4>{title}</h4>
					</div>
				</div>
			)}
			{body && <div className="card-body">{body}</div>}
			{footer && <div className="card-footer">{footer}</div>}
		</div>
	)
}

GenericCard.propTypes = {
	className: PropTypes.string,
	body: PropTypes.element,
	header: PropTypes.element,
	footer: PropTypes.element,
	title: PropTypes.string.isRequired
}

GenericCard.defaultProps = {
	className: '',
	body: '',
	footer: '',
	title: ''
}

export default GenericCard
