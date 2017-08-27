import React, { Component } from 'react'
import cx from 'classnames'

import 'styles/TagChooser.scss'

class TagChooser extends Component {
  render() {
    const { tags, onToggle } = this.props
    return (
      <div className="TagChooser flex-row">
        {tags.map(tag =>
          <Tag
            key={tag.name}
            tag={tag}
            onClick={() => {
              onToggle(tag)
            }}
          />,
        )}
      </div>
    )
  }
}

export function Tag({ tag, onClick }) {
  return (
    <div
      onClick={onClick}
      className={cx('TagChooserChoice', {
        isActive: tag.isActive,
      })}
    >
      {tag.name}
    </div>
  )
}

export default TagChooser
