import React, { Component } from 'react'
import { List, Button } from 'antd'
import NewsDetailDrawer from 'components/presentational/functional/NewsDetailDrawer'
import AddNewsDialog from 'components/presentational/AddNewsDialog.jsx'
import IconText from 'components/presentational/functional/IconText'
import { newsApi } from 'service'

class NewsContainer extends Component {
  state = {
    newsList: [],
    showDrawer: false,
    showNewDialog: false,
    newsDetail: {}
  }

  componentDidMount() {
    newsApi.get().then((data) => {
      this.setState({
        newsList: data
      })
    })
  }
  handleOpenDrawer = (item) => () => {
    this.setState({
      showDrawer: !this.state.showDrawer,
      newsDetail: item
    })
  }
  handleCloseDrawer = () => {
    this.setState({
      showDrawer: !this.state.showDrawer,
      newsDetail: {}
    })
  }
  handleToggleNewDialog = () => {
    this.setState({
      showNewDialog: !this.state.showNewDialog
    })
  }
  handleAddNews = (news) => {
    newsApi.save(news).then(() => {
      newsApi.get().then((data) => {
        this.setState({
          newsList: data
        })
      })
    })
    this.handleToggleNewDialog()
  }

  render() {
    const { newsList } = this.state
    return (
      <div>
        <List
          header={<div>News List</div>}
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 3,
          }}
          footer={<Button onClick={this.handleToggleNewDialog}>Add News</Button>}
          bordered
          dataSource={newsList}
          renderItem={item => (
            <List.Item
              key={item.title}
              actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
            >
              <List.Item.Meta
                title={<a onClick={this.handleOpenDrawer(item)}>{item.title}</a>}
                description={item.description}
              />
              {item.content}
            </List.Item>
          )}
        />
        <NewsDetailDrawer
          visible={this.state.showDrawer}
          data={this.state.newsDetail}
          onClose={this.handleCloseDrawer}
        />
        <AddNewsDialog
          visible={this.state.showNewDialog}
          onCancel={this.handleToggleNewDialog}
          onSubmit={this.handleAddNews}
        />
      </div>
    )
  }
}
export default NewsContainer
 