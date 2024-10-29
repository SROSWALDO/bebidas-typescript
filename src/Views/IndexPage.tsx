import { useAppStore } from "../Store/useAppStore";

export default function IndexPage() {

  const { categories } = useAppStore()

  return (
    <div>
      <h1>indexpage</h1>
    </div>
  );
}
