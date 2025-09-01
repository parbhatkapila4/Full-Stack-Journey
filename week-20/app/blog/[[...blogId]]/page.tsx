export default async function blogPage({ params }: any) {
  const Blogid = (await params).blogId;

  return <div>
    Blog Page'sssss'
     {JSON.stringify(Blogid)}
     </div>;
}
