import React from 'react'
import { Icon } from 'antd'

export const customizeRenderEmpty = () => (
  <div style={{ textAlign: 'center' }}>
    <Icon type="smile" style={{ fontSize: 20 }} />
    <p>Data Not Found</p>
  </div>
)