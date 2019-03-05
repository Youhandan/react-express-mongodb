import React from 'react'
import { ConfigProvider } from 'antd'
import NewsContainer from 'components/container/NewsContainer'
import { customizeRenderEmpty } from 'components/presentational/functional/customizeRenderEmpty'

const App = () => (
  <div>
    <ConfigProvider renderEmpty={customizeRenderEmpty}>
      <NewsContainer/>
    </ConfigProvider>
  </div>
)

export default App