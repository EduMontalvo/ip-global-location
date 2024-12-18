import { EnvironmentOutlined, MenuOutlined } from "@ant-design/icons";

export default function Header() {
  return (
    <>
      <div className=" w-full bg-zinc-900 sticky top-0 z-40">
        <div className="flex justify-between items-center w-4/5 m-auto py-4">
          <div className="flex items-center">
            <h1 className="text-3xl text-white"><EnvironmentOutlined /> IP Location</h1>
          </div>
          <MenuOutlined className="text-3xl text-white" />
        </div>
      </div>

    </>
  )
}
