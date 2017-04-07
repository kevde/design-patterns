import Link from 'next/link'

// example header component
export default () => (
  <nav>
    <ul>
      <li><Link prefetch href='/VehicleFactory'><a>VehicleFactory</a></Link></li>
    </ul>
  </nav>
)