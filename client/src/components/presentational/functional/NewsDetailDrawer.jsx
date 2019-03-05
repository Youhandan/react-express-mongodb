import React from 'react'
import PropTypes from 'prop-types'
import { Drawer, Button } from 'antd'

const NewsDetailDrawer = ({visible = false, data = {}, onClose=()=>{}}) => (
  <Drawer
      title={data.title || ''}
      width={720}
      onClose={onClose}
      visible={visible}
      style={{
        overflow: 'auto',
        height: 'calc(100% - 108px)',
        paddingBottom: '108px',
      }}
  >
    <p>{data.content || ''}</p>
    <div
      style={{
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        borderTop: '1px solid #e9e9e9',
        padding: '10px 16px',
        background: '#fff',
        textAlign: 'right',
      }}
    >
      <Button onClick={onClose} type="primary">
        Close
      </Button>
    </div>
  </Drawer>
)

NewsDetailDrawer.propTypes = {
  visible: PropTypes.bool,
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
}

export default NewsDetailDrawer;