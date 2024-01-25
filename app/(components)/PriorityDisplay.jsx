import { faFire } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const PriorityDisplay = () => {
  return (
    <div class="flex justify-start align-baseline">
        <FontAwesomeIcon icon={faFire} className="text-blue-400" />
        <FontAwesomeIcon icon={faFire} className="text-blue-400" />
        <FontAwesomeIcon icon={faFire} className="text-blue-400" />
        <FontAwesomeIcon icon={faFire} className="text-blue-400" />
        <FontAwesomeIcon icon={faFire} className="text-blue-400" />
    </div>
  )
}

export default PriorityDisplay
