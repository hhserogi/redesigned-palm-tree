import Pools from "./Pools";

const PoolsGrid = () => {
  return (
    <main class="content">
      <div class="pools_pair_block">
        <div id="itemList">
          <div class="headerRow">
            <div class="headerCell">Pool (pair)</div>
            <div class="headerCell">ARP (%)</div>
            <div class="headerCell">Link</div>
          </div>
          <Pools />
          <div class="grid" id="gridContainer"></div>
        </div>
      </div>
    </main>
  );
};

export default PoolsGrid;
