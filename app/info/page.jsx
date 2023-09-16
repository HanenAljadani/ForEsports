function  page(){
  return(
    <div className="bg-gray-100 p-4">
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">مكتبة الكتب اهلا بك </h1>
        <div className="grid grid-cols-2 gap-4">
          
          {/* مربع 1 */}
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-lg font-semibold mb-2">قوة عقلك الباطن </h2>
            <p>يكمن هذا الكتاب بالتحدث عن </p>
          </div>

          {/* مربع 2 */}
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-lg font-semibold mb-2"> كتاب 2</h2>
            <p></p>
          </div>

          {/* مربع 3 */}
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-lg font-semibold mb-2">كتاب 3</h2>
            <p></p>
          </div>

          {/* مربع 4 */}
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-lg font-semibold mb-2"> كتاب 4</h2>
            <p>وصف </p>
          </div>
        </div>
      </div>
    </div>

    
  
  )

}




export default page;