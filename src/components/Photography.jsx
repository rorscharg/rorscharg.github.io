import React, { Component } from 'react'
import Link from 'gatsby-link'
import Images from './PhotographyProject'
import './Photography.scss'
const albums = {
    '2017-summer-montreal': '72157665232130448',
    '2017-summer-beauce': '72157692090128354',
    '2017-fall-montreal': '72157692090175044',
}

const albums_name = [
    '2017-fall-montreal',
    '2017-summer-beauce',
    '2017-summer-montreal',
]

const album_names = [
    'Montreal, Fall 2017',
    'Beauce, Summer 2017',
    'Montreal, Summer 2017',
]

class Photography extends Component {
    state = { albums: [] }

    buildFlickrPhotoApi = (farm, server, id, secret) => {
        let string =
            'https://farm' +
            farm +
            '.staticflickr.com/' +
            server +
            '/' +
            id +
            '_' +
            secret +
            '_h.jpg'
        return string
    }

    getAlbums = () => {
        let queryString =
            'https://api.flickr.com/services/rest/?method=flickr.photosets.getphotos&format=json&user_id=156166587@N08&photoset_id=' +
            '72157665232130448' +
            '&api_key=856b7c68ff0760ad430e10b48c31c7be&format=json&nojsoncallback=1'

        fetch(queryString).then(res => res.json().then(res => console.log(res)))
        //     let photos = body.photoset.photo
        //     let photoUrls = []
        //     photos.forEach(function(photo, index) {
        //         photoUrls[index] = buildFlickrPhotoApi(
        //             photo.farm,
        //             photo.server,
        //             photo.id,
        //             photo.secret
        //         )
        //     })
        //     console.log(photoUrls)
        //     this.state.albums = photoUrls
        // })
    }

    componentDidMount() {
        this.getAlbums()
    }

    render() {
        const { albums } = this.state
        var photographyProjects =
            albums.length > 0 ? <PhotographyProjects albums={albums} /> : null

        return <div>{photographyProjects}</div>
    }
}

function PhotographyProjects(props) {
    return props.albums.map((images, index) => (
        <div key={index}>
            <Route
                exact={true}
                path="/photography"
                render={() => (
                    <div>
                        <PhotographyProjectBoxList
                            index={index}
                            images={images[0]}
                            link={'/photography/' + index}
                        />
                    </div>
                )}
            />
            <Route
                exact={true}
                path={'/photography/' + index}
                render={() => (
                    <div>
                        <Images images={images} />
                    </div>
                )}
            />
            <br />
        </div>
    ))
}

function PhotographyProjectBoxList(props) {
    return (
        <div>
            <PhotographyProjectBox
                name={album_names[props.index]}
                link={props.link}
                image={props.images}
                alt={props.images}
            >
                {' '}
            </PhotographyProjectBox>
        </div>
    )
}

function PhotographyProjectBox(props) {
    return (
        <div>
            <Link to={props.link} class="photography-project-box-link">
                <div className="container">
                    <div className="card photography-project-box">
                        <div className="row ">
                            <div
                                className="col-md-4"
                                className="photography-box-title"
                            >
                                <h4 className="card-title">{props.name}</h4>
                            </div>
                            <div className="col-md-8">
                                <img
                                    class="photography-project-preview"
                                    src={props.image}
                                    className="w-100"
                                    alt={props.image}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Photography
