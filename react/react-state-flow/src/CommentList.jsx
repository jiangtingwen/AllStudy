import React, { Component } from 'react';
class CommentList extends Component {
  state = {  }
  render() { 
      const {commentList} = this.props
    return (
      <div>
        {
            commentList.map((comment,i) => {
                return (
                    <li key={i}>
                        用户名:{comment.userName}
                        内容:{comment.commentContent}
                    </li>
                )
            })
        }

      </div>
    );
  }
}
 
export default CommentList;
