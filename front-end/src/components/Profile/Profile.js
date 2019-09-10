import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { 
    getPostsByUserId,
    getUserProfile
} from '../../actions/profileActions';
import Post from '../Posts/Post';
import LoadingPost from '../Posts/LoadingPost';

const styles = {

}

class Profile extends Component {

    componentDidMount(){
        this.props.getPostsByUserID(this.props.match.params.userId)
        this.props.getUserProfile(this.props.match.params.userId)
    }
    render() {
        const { classes, 
                loadingPosts,
                loadingProfile,
                list,
                auth,
                user,
                profile
                } = this.props
            
        const items = list && list.mapl(el => <Post key={el._id} post={el} />)
        return (
            <div>
               { loadingPosts ? <LoadingPost /> : items }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    loadingPosts: state.post.loading,
    list: state.post.list,
    profile: state.profile.user,
    loadingProfile: state.profile.loading,
    auth: state.auth,
    user: state.auth.user
})

export default connect(mapStateToProps, { getPostsByUserId, getUserProfile })(withStyles(styles)(Profile));