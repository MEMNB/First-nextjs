//"use client"
import {useRouter} from 'next/navigation'

export const metadata = {
    title: "Acerca de nosostros",
};

function AboutPage() {
    const router = useRouter()
    return (
    <section>
        <h1>About</h1>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quo labore, vel recusandae facere sequi aliquam facilis cupiditate dolor repellendus possimus, odit beatae vero temporibus quae, suscipit soluta ab numquam omnis natus? Perspiciatis eligendi sint aspernatur officia! Provident sint iste modi reiciendis molestiae nobis iure ratione. Ut, perspiciatis delectus ipsam cupiditate quaerat perferendis placeat deleniti doloribus iusto eius recusandae atque earum aspernatur asperiores enim ex quam blanditiis dignissimos consequuntur? Blanditiis omnis accusamus sequi reprehenderit! Nam officia veniam numquam animi perspiciatis vitae explicabo minima laborum blanditiis, unde incidunt doloremque ipsa iusto quos. Harum sapiente cupiditate obcaecati natus sint repellendus. Ratione, maiores.
        </p>

        <button className="bg-sky-400 px-3 py-2 rounded-md" onClick={() => {
            alert('Executing code!!!')
            router.push('/')
         }}>
            Click
        </button>
    </section>
  );
     
}

export default AboutPage;