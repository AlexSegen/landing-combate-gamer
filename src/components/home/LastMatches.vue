<template>
  <div class="cg__matches">
    <div v-for="(item, index) in matches" :key="'match_'+index" class="cg__matches-item">
      
      <div class="cg__matches-details">
        <div class="cg__matches-media" :style="`background-image: url(${item.player_a.avatar})`"></div>
        <div class="cg__matches-box" :class="{ '__winner': item.player_a.isWinner}">
          <span class="cg__matches-name">{{item.player_a.name}}</span>
        </div>
        <div class="cg__matches-footer">
          {{item.player_a.level}}
        </div>
      </div>
      
      <div class="cg__matches-info">
        <img class="cg__matches-vs" src="@/assets/img/cg-logo-small.png">
          <p class="cg__matches-info-game">{{item.game}}</p>
          <p class="cg__matches-info-platform">{{item.platform}}</p>
      </div>
      
      <div class="cg__matches-details">
        <div class="cg__matches-media __right" :style="`background-image: url(${item.player_b.avatar})`"></div>
        <div class="cg__matches-box __right" :class="{ '__winner': item.player_b.isWinner}">
          <span class="cg__matches-name">{{item.player_b.name}}</span>
        </div>
        <div class="cg__matches-footer __right">
          {{item.player_b.level}}
        </div>
      </div>
    
    </div>
  </div>
</template>
<script>
import { lastMatches } from '@/services/mockup'
export default {
    name: "LastMatches",
    data() {
      return {
        matches: lastMatches
      }
    }
}
</script>
<style lang="scss" scoped>

.cg {
  &__matches {
    max-width: 900px;
    margin: 50px auto;

    &-item {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
    }

    &-details {
      width: 100%;
      position: relative;

    }

    &-vs {
      display: block;
      margin: 0 auto;
      width: 50px;
      height: 50px;
    }

    &-media {
        width: 120px;
        height: 120px;
        position: absolute;
        left: 20px;
        top: -35px;
        border-radius: 100%;
        z-index: 1;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;

        &.__right {
          left: unset;
          right: 20px;
        }
    }
    
    &-info {
      width: 50%;
      &-platform {
        font-size: .8rem;
        line-height: 1rem;
        opacity: .6;
        margin: 0;
      }

      &-game {
        font-size: .9rem;
        line-height: 1rem;
        margin: 5px 0 5px;
      }
    }

    &-footer {
      font-size: 1rem;
      color: var(--primary);
      text-align: right;
      padding: 0 20px;
      &.__right {
        text-align: left;
      }
    }

    &-box {
      font-size: 1.8rem;
      line-height: 2rem;
      font-weight: 800;
      text-align: right;
      padding: 10px 20px;
      background: var(--gray-dark);
      display: block;
      position: relative;
      clip-path: polygon(0 0,calc(100% - 20px) 0,100% 20px,100% 100%,20px 100%,0 calc(100% - 20px));

      &.__right {
        text-align: left;
      }

      &.__winner {
        background: var(--primary);
      }

      > span {
        font-family: var(--text-header-stack);
        display: block;
        text-transform: uppercase;
      }
    }
  }
}

</style>