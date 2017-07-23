import React from "react";
import UserService from '../../../services/UserService';

export default class UserDetails extends React.Component {
    render() {

        if(!this.props.user)
            return <article>No User selected</article>;

        let imgLink = UserService.getUserAvatar(this.props.user.name);
        return (<article>
                    <section className="user-header">
                        <div className="user-photo">
                            <img src={ imgLink } />
                        </div>
                        <h1>{ this.props.user.name }</h1>
                    </section>                    
                    <dl>
                        <dt>Email</dt>
                        <dd>{ this.props.user.email }</dd>
                        <dt>Phone</dt>
                        <dd>{ this.props.user.phone }</dd>
                    </dl>
                </article>)
    }
}
