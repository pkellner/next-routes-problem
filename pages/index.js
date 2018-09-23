// import Link from 'next/link'
import {Link} from '../routes'

export default () => (
    <div>Hello World.
        <ul>
            <li>
                <Link route='/presenter/2018/douglas-crockford-1124'
                      params={{ slugSpeaker: 'douglas-crockford-1124',ccYear: '2018'}}>
                    <a>/presenter/2018/douglas-crockford-1124</a>
                </Link>
            </li>
            <li>
                <Link route='/presenter/2018/douglas-crockford-1124x'
                      params={{ slugSpeaker: 'douglas-crockford-1124x',ccYear: '2018'}}>
                    <a>/presenter/2018/douglas-crockford-1124x</a>
                </Link>
            </li>
            <li>
                <Link route='/presenter/2018' params={{ ccYear: '2018'}}>
                    <a>/presenter/2018</a>
                </Link>
            </li>
        </ul>
    </div>
)


/// /presenter/2018/douglas-crockford-1124